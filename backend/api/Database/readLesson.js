const getAllLessons = async () => {
  try {
    const lessons = await Lesson.find();
    return lessons;
  } catch (error) {
    throw new Error('Error fetching lessons');
  }
};

const getLessonById = async (lessonId) => {
  try {
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      throw new Error('Lesson not found');
    }
    return lesson;
  } catch (error) {
    throw new Error('Error fetching lesson');
  }
};
