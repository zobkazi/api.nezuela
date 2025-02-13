import { IsString, IsNotEmpty, IsInt, MinLength, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  content: string;

  @IsInt()
  @IsNotEmpty()
  postId: number;

  @IsInt()
  @IsNotEmpty()
  userId: number;
}


export class UpdateCommentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @IsOptional()
  content?: string;

}