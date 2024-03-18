const updateLesson = async (lessonId, title, content) => {
  try {
    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      throw new Error('Lesson not found');
    }
    lesson.title = title;
    lesson.content = content;
    await lesson.save();
    return lesson;
  } catch (error) {
    throw new Error('Error updating lesson');
  }
};
