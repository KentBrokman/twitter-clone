import { useEffect } from "react"



export const TestComponent: React.FC = () => {
    useEffect(() => {
        console.log('Test Component rendered')
    })
    return (
        <div>Hello</div>
    )
}