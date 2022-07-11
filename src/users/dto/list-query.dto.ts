import { IsString } from 'class-validator';

export class ListQueryDto {
  @IsString()
  dest: 'ASC' | 'DESC';

  @IsString()
  sort: string;
}
