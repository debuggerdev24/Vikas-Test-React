import { useEffect, useState } from "react"

const Corousal = ({ arr, defaultIndex=0, timeInterval = 1000 }) => {

    const [count, setCount] = useState(defaultIndex)

    const next = () => {
        setCount(prev => (prev + 1) % arr.length)
    }
    const previous = () => {
        setCount(prev => (prev - 1 + arr.length) % arr.length)
    }

    useEffect(() => {
        if (!arr.length) return
        const timer = setTimeout(() => {
            next()
        }, timeInterval);

        return () => {
            clearTimeout(timer)
        }
    }, [count, arr])

    return (
        <>
            <div style={{ display: "inline-block", margin: "auto", textAlign: "center" }}>

                <div style={{ display: "flex", alignItems: "center" }}>

                    <button onClick={previous} >{"<"}</button>
                    <img src={arr[count]} />
                    <button onClick={next} > {">"} </button>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        {
                            arr.map((_, i) => {
                                return (
                                    <span onClick={() => setCount(i)} style={{ margin: "8px", fontSize: "40px" }} >.</span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Corousal