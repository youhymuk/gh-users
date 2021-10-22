import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgress, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { getUserProfile } from '../../store/thunks';
import { selectIsLoaded, selectUserProfile } from '../../store/selectors';
import { routePaths } from '../../routes';

import { UserProfile } from '../components';

const UserProfilePage = ({ match }) => {
    const { username } = match.params;

    const userProfile = useSelector(selectUserProfile);
    const isLoaded = useSelector(selectIsLoaded);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfile(username));
    }, [username]);

    return (
        <Container sx={{ display: 'flex' }}>
            {!isLoaded ? (
                <CircularProgress
                    size={75}
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ) : (
                <>
                    <Link to={routePaths.usersListPage()}>
                        <ArrowBackIcon sx={{ fontSize: '80px', fill: 'black' }} />
                    </Link>
                    <UserProfile user={userProfile} />
                </>
            )}
        </Container>
    );
};

export default UserProfilePage;
