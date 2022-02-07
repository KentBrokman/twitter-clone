import { LoadingState, LogInState, ProfileUpdatingState } from './../../../types';

export interface UserType {
    _id?: string;
    email: string;
    fullName: string;
    nickname: string;
    password: string;
    confirmHash: string;
    confirmed?: boolean;
    additionalInfo?: {
        location?: string;
        about?: string;
        website?: string;
    };
    images?: {
        profilePhoto?: null | ImageUploadModelInterface;
        backgroundPhoto?: null | ImageUploadModelInterface;
    };
    tweets?: string[];
    createdAt: string;
    // image?:  null | ImageUploadModelInterface | Schema.Types.ObjectId; // Почему не работает
}

export interface ImageUploadModelInterface {
    _id?: string;
    cloudinary_id: string;
    cloudinary_url: string;
}

export interface UserStateType {
    data: UserType | null,
    status: LoadingState,
    loginStatus: LogInState,
    prfoileUpdateingStatus: ProfileUpdatingState
}

export interface ImageObj {
    url: string;
    file: File;
}

export interface UpdateProfileObjType {
    fullName: string;
    about: string;
    location: string;
    website: string;
}

export interface UpdateProfileType {
    profilePhoto: ImageObj | null;
    backgroundPhoto: ImageObj | null;
    profileData: UpdateProfileObjType
}