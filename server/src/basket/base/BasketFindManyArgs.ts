/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BasketWhereInput } from "./BasketWhereInput";
import { Type } from "class-transformer";
import { BasketOrderByInput } from "./BasketOrderByInput";

@ArgsType()
class BasketFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BasketWhereInput,
  })
  @Field(() => BasketWhereInput, { nullable: true })
  @Type(() => BasketWhereInput)
  where?: BasketWhereInput;

  @ApiProperty({
    required: false,
    type: [BasketOrderByInput],
  })
  @Field(() => [BasketOrderByInput], { nullable: true })
  @Type(() => BasketOrderByInput)
  orderBy?: Array<BasketOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BasketFindManyArgs };
