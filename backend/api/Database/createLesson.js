const createLesson = async (title, content) => {
  try {
    const lesson = new Lesson({ title, content });
    await lesson.save();
    return lesson;
  } catch (error) {
    throw new Error('Error creating lesson');
  }
};
