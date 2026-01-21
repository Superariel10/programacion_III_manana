import { useMemo, useState } from 'react';
import { InputParrafo } from './InputParrafo';
import { Suma } from './Suma';
import { Triangulo } from './Triangulo';
import UseCallBackTotal from './useCallBackTotal';
import UseMemoTotal from './useMemoTotal';
import WorkDays from './examen1/WorkDays';
import PayrollSummary from './PayrollSummary';

function App() {
const [hours, setHours] = useState<number[]>([0,0,0,0]);
const rate = 5;
  const payroll = useMemo(()=>{
    const totalHours = hours.reduce((sum: any,h: any)=>sum+h,0);
    const extra = Math.max(0, totalHours -40)
    const pay = Math.min(totalHours) + extra*rate*1.5;
    return {totalHours, extra, pay}
  },[hours]);

  return (
    <>
      <InputParrafo/>
      <Suma/>
      <Triangulo/>
      <UseMemoTotal/>
      <UseCallBackTotal/>
      <WorkDays hours={hours} setHours={setHours}/>
      <PayrollSummary
      totalHours={payroll.totalHours}
      extra={payroll.extra}
      pay = {payroll.pay}
      />
    </>
  )
}

export default App
