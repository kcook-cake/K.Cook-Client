import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import 'src/styles/main/CakeStore.scss';

interface Props {
    page: number,
    setPageF: Function,
    length: any[],
    pageChangeF: Function,
}

const PageBar = ({ page, setPageF, length, pageChangeF }: Props) => {
    let [prev, setPrev] = useState(false);
    let [next, setNext] = useState(true);
    const PNCheck = () => {
        if (pageBox===1) {
            prev = false;
            setPrev(prev);
        }
        if (pageBox===Math.ceil(length.length/10)) {
            next = false;
            setNext(next);
        }
    }

    let [pageBox, setPageBox] = useState(1);

    useEffect(()=>{
        // if (length.length < 1) setNext(false);
        // Count();
    },[]);
    return (
        <div className='pagination cake-store-'>
            <button
                className={classNames("arrow", "prev", {"active": prev})}
                onClick={()=>{
                    if (!prev) return;
                    pageBox--;
                    setPageBox(pageBox);

                    next = true; setNext(next);
                    PNCheck();
                }}>
                &lt; Prev
            </button>
            {length.map((data: {num: number}, idx: number)=>{
                return(
                    <button
                        key={idx}
                        className={classNames("pagi", {
                            "active": data.num === page,
                            "pagi-none": pageBox!=Math.ceil(data.num/10), 
                        })}
                        onClick={()=>{
                            setPageF(data.num)
                            pageChangeF(data.num);
                        }}>
                        {data.num}
                    </button>
                );
            })}
            <button
                className={classNames("arrow", "prev", {"active": next})}
                onClick={()=>{
                    if (length.length < 11) {
                        setNext(false);
                        return;
                    }
                    if (!next) return;
                    pageBox++;
                    setPageBox(pageBox);

                    prev = true; setPrev(prev);
                    PNCheck();
                }}>
                Next &gt;
            </button>
        </div>
    );
}

export default PageBar;