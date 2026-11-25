import PageLayout from "../components/PageLayout"
import { useMemo, useState } from "react"

import { initialItems } from "../features/memo/initialItem"

function MemoPage() {

    return (
        <PageLayout>
            <WithoutUseMemo />
            <WithUseMemo />
        </PageLayout>
    )
}

function WithoutUseMemo() {
    const [count, setCount] = useState(0)
    const [items] = useState(initialItems)

    const selectedItem = items.find((item) => item.isSelected)
    return (
        <div className="bg-red-500 p-4 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Without useMemo</h1>
            <h1 className="text-2xl text-white mb-4">Count: {count}</h1>
            <h1 className="text-2xl text-white mb-4">Selected Item: {selectedItem?.id}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )

}

function WithUseMemo() {
    const [count, setCount] = useState(0)
    const [items] = useState(initialItems)

    const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items])
    return (
        <div className="bg-green-500 p-4 rounded-md">
            <h1 className="text-2xl font-bold mb-4">With useMemo</h1>
            <h1 className="text-2xl text-white mb-4">Count: {count}</h1>
            <h1 className="text-2xl text-white mb-4">Selected Item: {selectedItem?.id}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

export default MemoPage