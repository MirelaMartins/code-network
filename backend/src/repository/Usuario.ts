import Usuario from '@/model/Usuario';

const getUserDB = async (): Promise<any> => Usuario.find({ }).lean().exec();

export default getUserDB;
