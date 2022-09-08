import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import 'src/styles/main/CakeStore.scss';

interface Props {
    page: any,
    setPageF: any,
    length: number,
}

const PageBar = ({page, setPageF, length}: Props) => {
    let [prev, setPrev] = useState(false);
    let [next, setNext] = useState(true);
    const PNCheck = () => {
        if (pageBox==1) {
            prev = false;
            setPrev(prev);
        }
        if (pageBox==Math.ceil(length/10)) {
            next = false;
            setNext(next);
        }
    }

    let [pageBox, setPageBox] = useState(1);

    let [array, setArray] = useState([]);
    const Count = () => {
        var j = 0;
        array = [];
        if (pageBox*10 > length)
            for (var i=(pageBox-1)*10; i<length; i++) {
                array[j] = i+1;
                j++;
            }
        else
            for (var i=(pageBox-1)*10; i<pageBox*10; i++) {
                array[j] = i+1;
                j++;
            }
        setArray(array);
    };

    useEffect(()=>{
        console.log(length);
        Count();
    },[]);
    return (
        <>
            <div  className='pagination cake-store-'>
                <button
                    className={classNames("arrow", "prev", {"active": prev})}
                    onClick={()=>{
                        if (!prev) return;
                        pageBox--;
                        setPageBox(pageBox);
                        Count();

                        next = true; setNext(next);
                        PNCheck();
                    }}>
                    &lt; Prev
                </button>
                {array.map((data: any, idx: any)=>{
                    return(
                        <button
                            className={classNames("pagi", {"active": data == page})}
                            onClick={()=>setPageF(data)}>
                            {data}
                        </button>
                    );
                })}
                <button
                    className={classNames("arrow", "prev", {"active": next})}
                    onClick={()=>{
                        if (!next) return;
                        pageBox++;
                        setPageBox(pageBox);
                        Count();

                        prev = true; setPrev(prev);
                        PNCheck();
                    }}>
                    Next &gt;
                </button>
            </div>
        </>
    );
}

export default PageBar;