import { ParameterDetail } from './parameterDetail.model';

export interface MySqlDataSource {
    connection: string;
    sqlCommand: string;

    testCommand?: string;
    isStoredProcedure?: boolean;

    parameters?: ParameterDetail[];
}
