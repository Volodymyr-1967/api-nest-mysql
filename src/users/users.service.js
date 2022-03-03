"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./entities/user.entity");
var UsersService = /** @class */ (function () {
    function UsersService(usersRepository) {
        this.usersRepository = usersRepository;
    }
    UsersService.prototype.create = function (createUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            var existEmail, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.findOne({
                            email: createUserDto.email
                        })];
                    case 1:
                        existEmail = _a.sent();
                        if (existEmail)
                            throw new common_1.HttpException("Email ".concat(createUserDto.email, " already exists"), common_1.HttpStatus.CONFLICT);
                        newUser = new user_entity_1.UserEntity();
                        newUser.name = createUserDto.name;
                        newUser.email = createUserDto.email;
                        newUser.role = createUserDto.role;
                        newUser.updated = new Date();
                        return [4 /*yield*/, this.usersRepository.save(newUser)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.findAll = function (dataDest, dataSort) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!dataDest && !dataSort) {
                            dataSort = 'id';
                            dataDest = 'ASC';
                        }
                        if (!(dataSort === 'id')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.usersRepository.find({
                                order: {
                                    id: dataDest
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!(dataSort === 'name')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.usersRepository.find({
                                order: {
                                    name: dataDest
                                }
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!(dataSort === 'email')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.usersRepository.find({
                                order: {
                                    email: dataDest
                                }
                            })];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        if (!(dataSort === 'role')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.usersRepository.find({
                                order: {
                                    role: dataDest
                                }
                            })];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.findOne(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.update = function (id, updateUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            var updateUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateUser = new user_entity_1.UserEntity();
                        updateUser.id = id;
                        updateUser.name = updateUserDto.name;
                        updateUser.email = updateUserDto.email;
                        updateUser.role = updateUserDto.role;
                        return [4 /*yield*/, this.usersRepository.save(updateUser)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository["delete"](id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity))
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
