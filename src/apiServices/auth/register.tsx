import api from "../../utils/axios";

interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}
interface ApiResponse<T> {
  message: string;
  data: T;
}
export const registerUser = async (
  userData: RegisterRequestBody
): Promise<ApiResponse<any>> => {
  try {
    const response = await api.post<ApiResponse<any>>(
      "/auth/register",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
