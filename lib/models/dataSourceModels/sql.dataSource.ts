import { ParameterDetail } from './parameterDetail.model';

export interface SqlDataSource {
    connection: string;
    sqlCommand: string;

    testCommand?: string;
    isStoredProcedure?: boolean;

    parameters?: ParameterDetail[];
}
