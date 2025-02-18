"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_product_category_dto_1 = require("./create-product-category.dto");
class UpdateProductCategoryDto extends (0, swagger_1.PartialType)(create_product_category_dto_1.CreateProductCategoryDto) {
}
exports.UpdateProductCategoryDto = UpdateProductCategoryDto;
//# sourceMappingURL=update-product-category.dto.js.map