export interface CodeValidationResponse {
    code?: string;
    metadata?: CodeValidationMetadata;
    validationCount?: number;
    result?: CodeValidationResult;
    recalls?: object;
}

export interface CodeValidationMetadata {
    schemaId: number;
    data: any;
}

export interface CodeValidationData {
    manufacturingDate: string,
    batchID: string,
    productName: string,
    expiryDate: string,
    intendedMarket: string,
    milkCollectionDate: string,
    lastQualityDate: string,
    customsClearanceCertificateData: string
}

export interface CodeValidationResult {
    status: string;
    errors: CodeValidationError[];
}

export interface CodeValidationError {
    code: string;
    message: string;
}