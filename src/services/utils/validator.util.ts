export default ({ status }: { status: number }) => {
  if (status >= 400 && status < 600) {
    throw new Error('Oops! Something went wrong');
  }
};
