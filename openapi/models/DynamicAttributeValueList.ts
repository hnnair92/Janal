/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DynamicAttributeValueSubItems } from './DynamicAttributeValueSubItems';
import type { UploadedImages } from './UploadedImages';
export type DynamicAttributeValueList = {
    readonly id?: number;
    image: UploadedImages;
    sub_items?: Array<DynamicAttributeValueSubItems> | null;
    is_deleted?: boolean;
    deleted_at?: string | null;
    value: string;
    price: string;
    min_height?: number | null;
    max_height?: number | null;
    min_width?: number | null;
    max_width?: number | null;
    help_text?: string | null;
    readonly created_on?: string | null;
    readonly updated_on?: string;
    attribute: number;
    extra_attributes?: Array<number>;
};
