import { useFetch } from "../custom_hooks/useFetch";


interface DataInt {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export function FethcExample() {
    const {data,isLoading,error,refetch} = useFetch<DataInt[]>('https://jsonplaceholder.typicode.com/posts');
        
      return (
        <div>
          <div>
            <button onClick={() => refetch({
              params: {
                _limit: 3
              }
            })}>
              Перезапросить
            </button>
          </div>
          {isLoading && 'Загрузка...'}
          {error && 'Произошла ошибка'}
          {data && !isLoading && data.map((item: DataInt) => <div key={item.id}>{item.title}</div>) }
        </div>
      );
}