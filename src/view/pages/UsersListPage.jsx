import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Pagination, CircularProgress } from '@mui/material';

import { ITEMS_PER_PAGE, TOTAL_PAGES_COUNT } from 'constants/index';
import { selectCurrentPage, selectIsLoaded, selectUsersList } from 'store/selectors';
import { setCurrentPage } from 'store/actions';
import { getUsers } from 'store/thunks';

import { UserCard } from 'view/components';

const UsersListPage = () => {
    const [sinceIndex, setSinceIndex] = useState(0);

    const users = useSelector(selectUsersList);
    const isLoaded = useSelector(selectIsLoaded);
    const currentPage = useSelector(selectCurrentPage);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers(ITEMS_PER_PAGE, sinceIndex));
    }, [currentPage]);

    const onChangePage = (event, page) => {
        dispatch(setCurrentPage(page));
        setSinceIndex(page * ITEMS_PER_PAGE);
    };

    return (
        <>
            {!isLoaded && (
                <CircularProgress
                    sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                />
            )}
            {!!users.length && (
                <>
                    <Grid container spacing={2} sx={{ maxWidth: '1000px', margin: '0 auto' }}>
                        {users.map((user) => (
                            <Grid key={user.id} item>
                                <UserCard user={user} />
                            </Grid>
                        ))}
                    </Grid>
                    <Pagination
                        page={currentPage}
                        count={TOTAL_PAGES_COUNT}
                        onChange={onChangePage}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    />
                </>
            )}
        </>
    );
};

export default UsersListPage;
