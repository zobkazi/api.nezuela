export declare class CreatePaymentDto {
    merchantId: string;
    orderId: number;
    userId: number;
    amount: number;
    paymentRefId: string;
    clientMobileNo: string;
    status: string;
    paymentMethod: string;
    transactionId?: string;
    additionalMerchantInfo?: string;
    cancelIssuerRefNo?: string;
}
