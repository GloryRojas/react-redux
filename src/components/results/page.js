import React, { Fragment } from 'react';
import CssBaseLine from "@material-ui/core/CssBaseline";
import AppBar from "../appBar";
import { Typography } from '@material-ui/core';
import './styles.css';

const Page = (props) => {
    const {
        results,
    } = props;

    const isEmpty = results.length === 0;

    return (
        <Fragment>
            <CssBaseLine />
            <AppBar />
            <div className="results-page">
                { isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    : 
                    null
                }
            </div>
        </Fragment>
    );
};

export default Page;