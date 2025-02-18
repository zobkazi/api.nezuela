import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Prisma } from '@prisma/client';
export declare class PaymentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createPayment(data: CreatePaymentDto): Promise<{
        id: number;
        merchantId: string;
        orderId: number;
        userId: number;
        amount: Prisma.Decimal;
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
}
