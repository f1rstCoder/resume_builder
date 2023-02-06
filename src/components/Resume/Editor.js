import React from 'react'
import { CKEditor } from 'ckeditor4-react';
const Editor = ({ sectionName }) => {
    return (
        <div className='px-3'>
            <CKEditor
                type="inline"
                initData={<p>Give a brief description about yourself. Make sure to make it catchy for the recruiters!</p>}

            />
        </div>
    )
}

export default Editor