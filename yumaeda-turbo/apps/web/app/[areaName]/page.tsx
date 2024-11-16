import { FC } from 'react';

interface AreaProps {
    params: {
        areaName: string;
    };
}

const AreaPage: FC<AreaProps> = ({ params }) => {
    const { areaName } = params

    return (
        <div>
            <p>{areaName}</p>
        </div>
    )
}

export default AreaPage
