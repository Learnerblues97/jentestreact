import React from 'react';
import Header from 'Components/Organisms/Header';
const PageTemplate = ({ header, body }) => (
    <div>
        <div>{header}</div>
        <div>{body}</div>
    </div>
)
PageTemplate.defaultProps = {
    header: <Header />
}
export default PageTemplate

