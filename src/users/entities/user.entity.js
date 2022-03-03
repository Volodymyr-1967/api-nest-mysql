"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], UserEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], UserEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], UserEntity.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": ['admin', 'editor', 'guest'],
            "default": 'guest'
        })
    ], UserEntity.prototype, "role");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], UserEntity.prototype, "created");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], UserEntity.prototype, "updated");
    UserEntity = __decorate([
        (0, typeorm_1.Entity)() // { name: 'USERS', database: process.env.DB_DATABASE })
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
