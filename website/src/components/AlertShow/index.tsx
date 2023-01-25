import React,{useState} from "react";
import Alert,{AlertProps,AlertType} from '../../../../src/components/Alert/alert';
import ShowBar from '../ShowBar';
import Button, { ButtonSize, ButtonType } from '../../../../src/components/Button/button';
import '../../../../src/styles/doc.scss';

export default function AlertShow() {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    return (
        <ShowBar>
            <Button btnType={ButtonType.Primary} onClick={() => {
                setLeft(!left);
            }}>{left ? 'Close Left Alert' : 'Open Left Alert'}</Button>
            <Button btnType={ButtonType.Primary} onClick={() => {
                setRight(!right);
            }}>{right ? 'Close Right Alert' : 'Open Right Alert'}</Button>
            {left && <Alert title="Left Alert" description="This is a left alert" alertType={AlertType.Success} position="left" />}
            {right && <Alert title="Right Alert" description="This is a right alert" alertType={AlertType.Success} position="right" />}
        </ShowBar>
    )
}