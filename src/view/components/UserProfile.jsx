import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Card, Typography } from '@mui/material';

import { transformDate } from 'utils';

import avatar from 'assets/images/avatar.png';

const UserProfile = ({ user }) => {
    const {
        avatar_url: avatarUrl,
        name,
        followers,
        following,
        created_at: createdAt,
        company,
        email,
        location,
        blog,
        bio,
    } = user;

    const date = transformDate(createdAt);

    return (
        <Card raised sx={{ padding: '20px', margin: '0 auto' }}>
            {avatarUrl ? (
                <Avatar sx={{ width: '500px', height: '500px', margin: '0 auto' }} src={avatarUrl} alt="User avatar" />
            ) : (
                <img src={avatar} width="480" height="480" alt="User avatar" />
            )}
            <dl>
                {name && (
                    <Typography variant="overline">
                        <dt>Name:</dt>
                        <dd>{name}</dd>
                    </Typography>
                )}
                {followers != null && (
                    <Typography variant="overline">
                        <dt>Followers:</dt>
                        <dd>{followers}</dd>
                    </Typography>
                )}
                {following != null && (
                    <Typography variant="overline">
                        <dt>Following:</dt>
                        <dd>{following}</dd>
                    </Typography>
                )}
                {date && (
                    <Typography variant="overline">
                        <dt>Created:</dt>
                        <dd>{date}</dd>
                    </Typography>
                )}
                {company && (
                    <Typography variant="overline">
                        <dt>Company:</dt>
                        <dd>{company}</dd>
                    </Typography>
                )}
                {email && (
                    <Typography variant="overline">
                        <dt>Email:</dt>
                        <dd>{email}</dd>
                    </Typography>
                )}
                {location && (
                    <Typography variant="overline">
                        <dt>Location:</dt>
                        <dd>{location}</dd>
                    </Typography>
                )}
                {blog && (
                    <Typography variant="overline">
                        <dt>Blog:</dt>
                        <dd>
                            <a href={blog} target="_blank" rel="noopener noreferrer">
                                {blog}
                            </a>
                        </dd>
                    </Typography>
                )}
                {bio && (
                    <Typography variant="overline">
                        <dt>Bio:</dt>
                        <dd>{bio}</dd>
                    </Typography>
                )}
            </dl>
        </Card>
    );
};

UserProfile.propTypes = {
    user: PropTypes.shape({
        avatar_url: PropTypes.string,
        name: PropTypes.string,
        followers: PropTypes.number,
        following: PropTypes.number,
        location: PropTypes.string,
        blog: PropTypes.string,
        email: PropTypes.string,
        bio: PropTypes.string,
        company: PropTypes.string,
        created_at: PropTypes.string,
    }).isRequired,
};

export default UserProfile;
