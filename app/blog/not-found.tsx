import NotFound from '../not-found';

// Boundary for notFound() thrown inside this segment. Without a not-found file here,
// Next had no boundary to render and the response shipped an empty body.
export { metadata } from '../not-found';
export default NotFound;
