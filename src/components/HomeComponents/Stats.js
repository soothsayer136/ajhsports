import React from 'react'

function Stats() {
    const stats = [
        {
            stat: '10K +',
            text: "Customers visit every months"
        },
        {
            stat: '93%',
            text: "Satisfaction rate from our customers."
        },
        {
            stat: '4.9',
            text: "Average customer ratings out of 5.00!"
        },
    ]
    return (
        <div className="py-24 sm:py-32 mx-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-3">
                    {
                        stats.map((value, index) => (
                            <div className="mx-auto flex max-w-xs gap-4" key={index}>
                                <div className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl min-w-max">{value?.stat}</div>
                                <div className="text-base leading-7 text-gray-800 px-2  opacity-80">{value?.text}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Stats