import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Avatar, Typography } from '@mui/material';

import { routePaths } from 'routes';

import avatar from 'assets/images/avatar.png';

const UserCard = ({ user }) => {
    const { login, html_url: htmlUrl, avatar_url: avatarUrl } = user;

    return (
        <Card variant="outlined" sx={{ width: '180px', height: '180px', textAlign: 'center' }}>
            <Link to={routePaths.userProfilePage(login)}>
                {avatarUrl ? (
                    <Avatar
                        sx={{ width: '100px', height: '100px', margin: '0 auto' }}
                        src={avatarUrl}
                        alt="User avatar"
                    />
                ) : (
                    <img width="100" height="100" src={avatar} alt="User avatar" />
                )}
                <Typography>{login}</Typography>
            </Link>
            {htmlUrl && (
                <a href={htmlUrl} target="_blank" rel="noreferrer noopener">
                    Github
                </a>
            )}
        </Card>
    );
};

UserCard.propTypes = {
    user: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
        html_url: PropTypes.string,
    }).isRequired,
};

export default UserCard;
