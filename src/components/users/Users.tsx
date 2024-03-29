import React from 'react';
import s from "./users.module.css";
import ava from "../../assets/image/profile.webp";
import {Button} from "antd";
import { UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

export type UsersComponentPropsType = {
    totalUsersCount: number
    pageSize: number
    users: UsersType[]
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    followAC: (id: string) => void
    unFollowAC: (id: string) => void
    toggleIsFollowingInProgress: (id: string, isFetching: boolean) => void
    followingInProgress: string[]
}

export const Users: React.FC<UsersComponentPropsType> = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= 10; i++) {

        pages.push(i)
    }

    return (
        <div className={s.users}>
            {props.users.map(item => {
                return (
                    <div key={item.id} className={s.user}>
                        <div className={s.photo_container}>
                            <NavLink to={'/profile/' + item.id}>
                                <img className={s.photo} src={item.photos.small != null ? item.photos.small : ava}
                                     alt={'User avatar'}/>
                            </NavLink>
                            {item.followed ?
                                <Button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                                    props.unFollowAC(item.id)
                                }}>Unfollowed</Button>
                                : <Button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                                    props.followAC(item.id)
                                    }}>Followed</Button>}
                        </div>
                        <div>
                            <div className={s.name_container}>
                                <span>{item.name}</span>
                                <span>{item.status}</span>
                            </div>
                            <div className={s.location_container}>
                                <span>Minsk</span>
                                <span>Belarus</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div>
                {pages.map(item => {
                    return <button className={props.currentPage === item ? s.selected : ''}
                                   onClick={() => {props.onPageChanged(item)}}>{item}</button>
                })
                }
            </div>
        </div>
    );
};