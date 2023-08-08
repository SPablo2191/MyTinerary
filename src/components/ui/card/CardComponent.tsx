import { Card } from 'primereact/card';


export default function CardComponent({ title, subTitle, description, imageUrl, footer }: { title: string, subTitle: string, description: string, imageUrl: string, footer: string }) {
    const header = (
        <img alt="Card" className='h-32 rounded-lg  w-full object-cover' src={imageUrl} />
    );
    const footerComponent = (
        <div className="">
            <p>{footer}</p>
        </div>
    );

    return (
        <div className=" mx-4 my-4 text-center">
            <Card title={title} subTitle={subTitle} footer={footerComponent} header={header} className="bg-white dark:bg-slate-800 dark:text-white shadow-2xl">
                <p className="m-0">
                    {description}
                </p>
            </Card>
        </div>
    )
}
