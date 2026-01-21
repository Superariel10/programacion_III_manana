type Props ={
    hours: number[];
    setHours: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function WorkDays({hours, setHours}: Props){
    const days = ["Lun","Mar","Mie","Jue","Vie"];
    const changeHour = (i: Number, value: string)=>{
        const h = Number(value) || 0;
        setHours((prev)=> 
            prev.map((v, idx)=>(idx===i?h:v))
        );
    };

    {days.map((d,i)=>{
        <div key={d}>
        {d}:{""}
            <input 
            type="number"
            min={0}
            value={hours[i]}
            onChange={{e}=> changeHour(i,e.target.value)}
            />
        </div>
    })}
}