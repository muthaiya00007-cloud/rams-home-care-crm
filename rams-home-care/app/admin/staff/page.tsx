const handleDelete = async (id: number) => {
  if (!confirm("Delete this staff?")) return;

  try {
    await deleteStaff(id);
    loadStaff();
  } catch (error) {
    console.error(error);
    alert("Unable to delete staff.");
  }
};