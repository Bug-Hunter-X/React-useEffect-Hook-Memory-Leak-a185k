```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the component mounts
    console.log('Mounted!');
    //This causes memory leak because the cleanup function is not defined.
    return () => {
      // Cleanup logic here. This will be executed before the component unmounts
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```