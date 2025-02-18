"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_payment_dto_1 = require("./create-payment.dto");
class UpdatePaymentDto extends (0, swagger_1.PartialType)(create_payment_dto_1.CreatePaymentDto) {
}
exports.UpdatePaymentDto = UpdatePaymentDto;
//# sourceMappingURL=update-payment.dto.js.map