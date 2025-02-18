import { PaymentService } from './payment.service';
import { CreatePaymentDto, UpdatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(data: CreatePaymentDto): Promise<{
        id: number;
        merchantId: string;
        orderId: number;
        userId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        paymentRefId: string;
        clientMobileNo: string;
        status: import(".prisma/client").$Enums.PaymentStatus;
        transactionId: string | null;
        paymentMethod: string;
        orderDateTime: Date;
        issuerPaymentDateTime: Date | null;
        additionalMerchantInfo: string | null;
        cancelIssuerDateTime: Date | null;
        cancelIssuerRefNo: string;
    }>;
    findOne(id: string): Promise<any>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<any>;
    remove(id: string): Promise<any>;
}
