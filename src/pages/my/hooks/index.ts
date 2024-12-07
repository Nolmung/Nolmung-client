import { DogType } from "@/service/apis/dog/index.type";
import { getDogsList, getUser } from "@/service/apis/user";
import { UserType } from "@/service/apis/user/index.types";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  return useQuery<UserType>({
    queryKey: ['userData'],
    queryFn: getUser,
  });
};

export const useGetDogsList = () => {
  return useQuery<DogType[]>({
    queryKey: ['dogData'],
    queryFn: getDogsList,
  });
};