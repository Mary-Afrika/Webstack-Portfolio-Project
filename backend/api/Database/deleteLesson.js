const deleteLesson = async (lessonId) => {
  try {
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      throw new Error('Lesson not found');
    }
    await lesson.remove();
    return lesson;
  } catch (error) {
    throw new Error('Error deleting lesson');
  }
};
