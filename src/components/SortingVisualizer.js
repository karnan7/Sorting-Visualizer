import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getMergeSortAnimations } from '../SortingAlgorithms/sortingAlgorithm'

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOR = '#007CD2';
const SECONDARY_COLOR = 'red';

const SortingVisualizer = () => {
    const[array, setArray] = useState([])

    useEffect(()=>{
        resetArray()
    }, [])

    const resetArray =() =>{
        const newArray = []
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            newArray.push(randomIntFromInterval(5,730))
        }
        setArray(newArray);
    }

    const mergeSort = () => {
        const animations = getMergeSortAnimations(array);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName("bar");
            const isColorChange = i % 3 !==2;
            if(isColorChange){
                const[barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS)
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height=`${newHeight}px`;
                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    

    const quickSort = () => {}
    const heapSort = () => {}
    const bubbleSort = () => {}

  return (
    <Container>
        <Header>
            <h1>Sorting Visualizer</h1>
            <Buttons>
                <ResetButton onClick={resetArray}>New</ResetButton>
                <MergeSort onClick={mergeSort}>Merge Sort</MergeSort>
                <QuickSort>Quick Sort</QuickSort>
                <HeapSort>Heap Sort</HeapSort>
                <BubbleSort>Bubble Sort</BubbleSort>
            </Buttons>
        </Header>
        <Content>
            {array.map((value,idx) => (
            <div className='bar'
             style={{ 
                height:`${value}px`
            }}key={idx}></div>
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
    margin:0px 100px;

    .bar{
        width:5px;
        margin: 0 1px;
        background-color:#007CD2;
    }
`




