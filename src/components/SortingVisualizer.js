import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const SortingVisualizer = () => {
    const[numbers, setNumbers] = useState([])

    useEffect(()=>{
        resetArray()
    }, [])

    const resetArray =() =>{
        const array = []
        for(let i=0; i<150; i++){
            array.push(randomIntFromInterval(5,730))
        }
        setNumbers(array)
    }
    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    
    const mergeSort = () => {}
    const quickSort = () => {}
    const heapSort = () => {}
    const bubbleSort = () => {}

  return (
    <Container>
        <Header>
            <h1>Sorting Visualizer</h1>
            <Buttons>
                <ResetButton onClick={resetArray}>New</ResetButton>
                <MergeSort>Merge Sort</MergeSort>
                <QuickSort>Quick Sort</QuickSort>
                <HeapSort>Heap Sort</HeapSort>
                <BubbleSort>Bubble Sort</BubbleSort>
            </Buttons>
        </Header>
        <Content>
            {numbers.map((value,idx) => (
            <Bars style={{height:`${value}px`}}key={idx}/>
            ))}
        </Content>
    </Container>
  )
}

export default SortingVisualizer;

const Container = styled.div`

`
const Header=styled.div`
    height:130px;
    background:#333;
    display:grid;
    place-content:center;

        h1{
            margin:0;
            color:#fff;
            text-transform:uppercase;
        }
`
const Buttons=styled.div`
    display:flex;
    gap: 10px;
    margin:10px auto;
`
const ResetButton=styled.button`
        padding: 10px 20px;
        border-radius: 6px;
        border:1px solid #fff;
        background:transparent;
        color:#fff;
        cursor:pointer;
`
const MergeSort=styled(ResetButton)`

`
const QuickSort=styled(ResetButton)`

`
const HeapSort=styled(ResetButton)`

`
const BubbleSort=styled(ResetButton)`

`

const Content = styled.div`
    display:flex;
    justify-content:center;
`
const Bars = styled.div`
    width:5px;
    margin: 0 1px;
    background:#007CD2;
`




