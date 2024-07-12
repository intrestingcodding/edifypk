import Banner_common from '@/components/Banner_common'
import Courses from '@/components/Courses'
import React from 'react'

const page = () => {
    return (
        <div>
            <Banner_common heading="Courses" path="Home > Courses" />
            <div className="py-16">
                <Courses />
            </div>
        </div>
    )
}

export default page