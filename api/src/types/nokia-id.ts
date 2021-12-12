import { Static, Type } from '@sinclair/typebox'

export const NokiaId = Type.Object({nokiaId:Type.String()});
export type NokiaIdType = Static<typeof NokiaId>;

export const PatientId = Type.Object({patientId:Type.String()});
export type PatientIdType = Static<typeof PatientId>;
