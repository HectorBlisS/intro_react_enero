import React from 'react'
import { Card } from 'antd'

export default function ({ name, stars }) {
    return <div>
        <Card
            title={name}
        >
            <p>Estrellas: {stars}</p>
        </Card>
    </div>
}