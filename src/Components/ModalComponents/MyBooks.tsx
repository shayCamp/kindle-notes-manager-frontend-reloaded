import React from 'react';

// interface MyBooksProps {}

const MyBooks = ({ ...props }) => {
    console.log(props);
    return (
        <div>
            <h1>MyBooks</h1>
        </div>
    );
};

export default MyBooks;
