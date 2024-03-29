import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./profile-info/ProfileInfo";
import {MyPostsContainer} from "./posts/post/MyPostsContainer";

export type ProfilePropsType = {
    profile: any
    status: string
    updateStatusTC: (status: string) => void
}

const Profile:React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusTC={props.updateStatusTC}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;