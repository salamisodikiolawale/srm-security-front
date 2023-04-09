export default interface User{
    name:string;
    lastName:string;
    email:string;
    password:string;
    trainer:boolean;
    center:boolean;
    tranee:boolean;
    currentUserDatas?:CurrentUserDatas;
}

interface CurrentUserDatas {
  _id?:string;
  userId?: string;
  name?: string;
  description?: string;
  createdDate?: string;
  website?: string;
  address?: string;
  trainer?: boolean;
  trainee?: boolean;
  center?: boolean;
  createdAt?:string;
  updatedAt?: string;
  __v?:string;
}