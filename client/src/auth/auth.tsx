
export const signIn = async () => {
  try {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const code = err.code;
    const message = err.message;

    console.log(
      `An error ${code} occurred when logging user with message: ${message}`,
    );
    return null;
  }
};

export const signOut = async () => {
};
